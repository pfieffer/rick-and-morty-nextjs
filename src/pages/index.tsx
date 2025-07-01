import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Character } from '../types';
import styles from '../styles/PageLayout.module.css';

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchTerm}`);
        const data = await response.json();
        if (response.status === 404 || !data.results) {
          setCharacters([]);
          setTotalPages(0);
          setError('No characters found.');
        } else {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        }
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={styles.centeredContainer}>
        <h1 className={styles.centeredText}>Rick and Morty Characters</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading && <Loading />}
      {error && <Error message={error} />}
      <CardList characters={characters} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;