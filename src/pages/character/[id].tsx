import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Character } from "types";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from '../../styles/PageLayout.module.css';

const CharacterDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!response.ok) {
                    setCharacter(null);
                    setError('Character not found.');
                } else {
                    const data = await response.json();
                    setCharacter(data);
                    setError(null);
                }
            } catch (err) {
                setError('Failed to fetch character details');
                setCharacter(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCharacterDetails();
        }
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    if (!character) return <Error message="No character found." />;

    return (
        <div className={styles.centeredContainer}>
            <h1 className={styles.centeredText}>{character.name}</h1>
            <img src={character.image} alt={character.name} className={styles.characterImage} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin?.name}</p>
            <p>Location: {character.location?.name}</p>
        </div>
    );
};

export default CharacterDetail;