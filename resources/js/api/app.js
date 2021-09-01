//calling the API
const API_KEY = 'api_key=8580bc95b6e9bf907a7ac3cc6227d674';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_POPULAR_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const API_PH_MOVIE_URL = BASE_URL + '/discover/movie/?certification_country=PH&sort_by=vote_average.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const IMAG_BANNER_URL = 'https://image.tmdb.org/t/p/original';

//calling the functions for fetching movies
// getMovies(API_POPULAR_URL,API_PH_MOVIE_URL);

// function getMovies(popular_url,ph_movie_url){
//     fetch(popular_url).then(res => res.json()).then(data =>{//fetching all popular movies from API
//         showPopular(data);//calling function that will show the popular movies and passing the data fecthed from the API
//         showHeaderMovie(data);//calling function that will created a movie banner at the top op the page
//     })

//     fetch(ph_movie_url).then(res => res.json()).then(data =>{//fetching all popular movies from Philippines from API
//         showPhPopular(data);//calling function that will show the popular movies and passing the data fecthed from the API
//     })


// }

// function showHeaderMovie(movie_banner){

//     const movieBanner = document.getElementById('movie_top');

//     const backdrop_path = movie_banner.results[5].backdrop_path;
//     const title = movie_banner.results[5].original_title;
//     const overview = movie_banner.results[5].overview;

//     //creating movie banner and details
//     movieBanner.innerHTML += `
//         <div class="header" style="background-image: url('${IMAG_BANNER_URL+backdrop_path}')">
//             <div class="movie-info">
//                 <div class="header-title">
//                     <h2>${title}</h2>
//                 </div>
//                 <div class="movie-overview">
//                     <p>${overview}</p>
//                 </div>
//                 <div class="header-content">
//                     <div class="header-buttons">
//                         <button class="play-btn">
//                             <i class="fa fa-play"></i>&nbsp; Play
//                         </button>
//                         <button class="more-info-btn">
//                             <i class="fa fa-info-circle"></i>&nbsp; More info
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     `;
// }

// function showPopular(popular_data){

//     const movileEl = document.getElementById('posters');

//     popular_data.results.forEach(movie=> { //data is nested array I specified the array index to be extracted
//         const {title, poster_path} = movie;
//         movileEl.innerHTML += `<img src="${IMG_URL+poster_path}" alt="${title}" class="img-poster">`;//creating a html element and concatinating on div element with the id of posters. The concatenated images here are the generated image on the page.
//     });

// }

function showPhPopular(ph_movie_data){

    const movileEl = document.getElementById('ph_movies');
    ph_movie_data.results.forEach(movie=> { //data is nested array I specified the array index to be extracted
        const {title, poster_path} = movie;
        movileEl.innerHTML += `<img src="${IMG_URL+poster_path}" alt="${title}" class="img-poster">`;//creating a html element and concatinating on div element with the id of ph_movies. The concatenated images here are the generated image on the page.
    });
}
