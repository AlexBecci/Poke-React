import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlassContainer from "../components/ui/GlassContainer";
import Loader from "../components/Loader";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula, parseEvolutionChain } from "../helper/Helper";

// ── Stat configuration ────────────────────────────────────────────────────
const STAT_LABELS = ['HP', 'Ataque', 'Defensa', 'Sp. Ataque', 'Sp. Defensa', 'Velocidad'];
const STAT_MAX = 255;

// ── StatRow — memoized to skip re-renders when parent state updates
const StatRow = memo(function StatRow({ label, value }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
			<span
				style={{
					width: 96,
					fontSize: 11,
					fontWeight: 600,
					letterSpacing: '0.05em',
					color: 'rgba(255,255,255,0.55)',
					textTransform: 'uppercase',
					flexShrink: 0,
				}}
			>
				{label}
			</span>
			<div className='stat-bar-track'>
				<div className='stat-bar-fill' style={{ width: `${(value / STAT_MAX) * 100}%` }} />
			</div>
			<span style={{ width: 32, fontSize: 14, fontWeight: 700, color: '#ffffff', textAlign: 'right', flexShrink: 0 }}>
				{value}
			</span>
		</div>
	);
});

// ─────────────────────────────────────────────────────────────────────────────

function PokemonPage() {
	const { getPokemonByID, getEvolutionChain } = useContext(PokemonContext);

	const [loading, setLoading]               = useState(true);
	const [pokemon, setPokemon]               = useState({});
	const [evolutionChain, setEvolutionChain] = useState([]);

	const { id } = useParams();

	const fetchData = useCallback(
		async (pokemonId) => {
			setLoading(true);
			const data = await getPokemonByID(pokemonId);
			setPokemon(data);
			setLoading(false);
			try {
				const evo = await getEvolutionChain(pokemonId);
				setEvolutionChain(parseEvolutionChain(evo.chain));
			} catch {
				setEvolutionChain([]);
			}
		},
		[getPokemonByID, getEvolutionChain]
	);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		fetchData(id);
	}, [id, fetchData]);

	if (loading) return <Loader />;

	const sprite =
		pokemon.sprites?.other?.['official-artwork']?.front_default ||
		pokemon.sprites?.other?.dream_world?.front_default;

	return (
		<main style={{ minHeight: '100vh', padding: '40px 24px' }}>
			<div className='container' style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

				{/* ── Hero Card ─────────────────────────────────────────── */}
				<GlassContainer
					elevation='elevated'
					style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}
				>
					<div style={{ display: 'flex', justifyContent: 'center', flex: '0 0 200px' }}>
						<img
							src={sprite}
							alt={`Pokemon ${pokemon.name}`}
							style={{
								width: 200,
								height: 200,
								objectFit: 'contain',
								filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.45))',
							}}
						/>
					</div>
					<div style={{ flex: 1, minWidth: 200 }}>
						<span className='pokemon-number'>#{String(pokemon.id).padStart(3, '0')}</span>
						<h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
							{primerMayuscula(pokemon.name)}
						</h1>
						<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
							{pokemon.types.map((type) => (
								<span key={type.type.name} className={`type-badge ${type.type.name}`}>
									{type.type.name}
								</span>
							))}
						</div>
						<div style={{ display: 'flex', gap: 32 }}>
							<div>
								<p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 4 }}>Altura</p>
								<p style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{(pokemon.height / 10).toFixed(1)} m</p>
							</div>
							<div>
								<p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 4 }}>Peso</p>
								<p style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{(pokemon.weight / 10).toFixed(1)} kg</p>
							</div>
						</div>
					</div>
				</GlassContainer>

				{/* ── Base Stats ────────────────────────────────────────── */}
				<GlassContainer elevation='standard'>
					<GlassContainer.Header>
						<h2 className='section-heading'>Estadísticas Base</h2>
					</GlassContainer.Header>
					<GlassContainer.Body>
						{pokemon.stats.map((stat, i) => (
							<StatRow key={stat.stat.name} label={STAT_LABELS[i]} value={stat.base_stat} />
						))}
					</GlassContainer.Body>
				</GlassContainer>

				{/* ── Abilities ─────────────────────────────────────────── */}
				<GlassContainer elevation='standard'>
					<GlassContainer.Header>
						<h2 className='section-heading'>Habilidades</h2>
					</GlassContainer.Header>
					<GlassContainer.Body>
						<div className='abilities-grid'>
							{pokemon.abilities.map(({ ability, is_hidden }) => (
								<span
									key={ability.name}
									className={`ability-badge ${is_hidden ? 'hidden-ability' : ''}`}
								>
									{primerMayuscula(ability.name.replace(/-/g, ' '))}
									{is_hidden && <span className='hidden-tag'>Oculta</span>}
								</span>
							))}
						</div>
					</GlassContainer.Body>
				</GlassContainer>

				{/* ── Evolution Chain ───────────────────────────────────── */}
				{evolutionChain.length > 1 && (
					<GlassContainer elevation='standard'>
						<GlassContainer.Header>
							<h2 className='section-heading'>Cadena Evolutiva</h2>
						</GlassContainer.Header>
						<GlassContainer.Body>
							<div className='evolution-chain'>
								{evolutionChain.map((evo, index) => (
									<React.Fragment key={evo.id}>
										<Link to={`/pokemon/${evo.id}`} className='evolution-item'>
											<img
												src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.id}.png`}
												alt={evo.name}
											/>
											<span>{primerMayuscula(evo.name)}</span>
										</Link>
										{index < evolutionChain.length - 1 && (
											<span className='evolution-arrow'>→</span>
										)}
									</React.Fragment>
								))}
							</div>
						</GlassContainer.Body>
					</GlassContainer>
				)}

			</div>
		</main>
	);
}

export default memo(PokemonPage);
