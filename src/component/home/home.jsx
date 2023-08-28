import React, { useEffect, useState } from 'react';
import Hero from '../hero/hero';
import { Box, Heading } from '@chakra-ui/react';
import Popular from '../popular/popular';
import axios from 'axios';
import { API_REQUEST } from '../../services/movei';
import TopRated from '../top-rated/top-rated';
import Trending from '../trending/trending';
import UpComing from '../upcoming/upcoming';
import Horror from '../horror/horror';
import TvTopRated from '../tr-top-rated/tv-top-rated';
import Documentary from '../documentary/documentary';
import History from '../history/history';
import Comedy from '../comendy/comedy';
import Family from '../family/family';

export default function Home() {
	const [movies, setMovies] = useState([]);
	const [isTopRated, setIsTopRated] = useState([]);
	const [isTrending, setIsTrending] = useState([]);
	const [isUpcoming, setIsUpcoming] = useState([]);
	const [isHorror, setIsHorror] = useState([]);
	const [isTvtopRated, setIsTvtopRated] = useState([]);
	const [isDocumentary, setIsDocumentary] = useState([]);
	const [isHistory, setIsHistory] = useState([]);
	const [isComedy, setIsComedy] = useState([]);
	const [isFamily, setIsFamily] = useState([]);

	useEffect(() => {
		axios.get(API_REQUEST.popular).then(res => setMovies(res.data.results));
		axios.get(API_REQUEST.topRated).then(res => setIsTopRated(res.data.results));
		axios.get(API_REQUEST.trending).then(res => setIsTrending(res.data.results));
		axios.get(API_REQUEST.upcoming).then(res => setIsUpcoming(res.data.results));
		axios.get(API_REQUEST.horror).then(res => setIsHorror(res.data.results));
		axios.get(API_REQUEST.tv_top_rated).then(res => setIsTvtopRated(res.data.results));
		axios.get(API_REQUEST.documentary).then(res => setIsDocumentary(res.data.results));
		axios.get(API_REQUEST.history).then(res => setIsHistory(res.data.results));
		axios.get(API_REQUEST.comedy).then(res => setIsComedy(res.data.results));
		axios.get(API_REQUEST.family).then(res => setIsFamily(res.data.results));
	}, []);

	return (
		<Box>
			<Hero />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Top Rated
			</Heading>
			<TopRated isTopRated={isTopRated} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Popular
			</Heading>
			<Popular movies={movies} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Trending
			</Heading>
			<Trending isTrending={isTrending} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Upcoming
			</Heading>
			<UpComing isUpcoming={isUpcoming} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Horror
			</Heading>
			<Horror isHorror={isHorror} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Tv top rated
			</Heading>
			<TvTopRated isTvtopRated={isTvtopRated} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Documentary
			</Heading>
			<Documentary isDocumentary={isDocumentary} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				History
			</Heading>
			<History isHistory={isHistory} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Comedy
			</Heading>
			<Comedy isComedy={isComedy} />
			<Heading pl={{ base: 4, md: 10 }} fontSize={'3xl'}>
				Family
			</Heading>
			<Family isFamily={isFamily} />
		</Box>
	);
}
