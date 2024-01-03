// call api là hành động mà FE send request đến BE 
// để tạo ra một cái promises(lời hứa).
// để tạo 1 req từ fe xuống be thì có thể sử dung axios cdn


const fetchMovies = async () => {
    // promise
    // await: đợi tới khi cái promise trả về kết quả
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=a10ee5569194b352bcca20840b7f8a32&with_networks=213"
    );
    const movies = response.data.results;
  
    // movies -> items
    const items = movies.map((movie) => {
      return `
      <div class="item">
        <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" />
      </div>`;
    });
  
    const singleCarousel = document.getElementById("single-carousel");
    singleCarousel.innerHTML = items.join("");
  
    $(".single-carousel").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
  };
  // function tạo ra 1 movie row
  const fetchMoviesRow = async (api, title) => {
    const response = await axios.get(api);
  
    const body = document.getElementById("body");
  
    body.innerHTML += `    <div class="movie-row">
    <div class="movie-row__title">
      <h3>Trending Now</h3>
    </div>
  
    <div class="movie-row__items">
      <div class="responsive-carousel">
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg" alt="" />
        </div>
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/qjhahNLSZ705B5JP92YMEYPocPz.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg" alt="" />
        </div>
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/qjhahNLSZ705B5JP92YMEYPocPz.jpg" alt="" />
        </div>
  
        <div class="item">
          <img src="https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>`;
  };
  
  const fetch = async () => {
    await fetchMovies();
    await fetchMoviesRow(
      "https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US",
      "Trending"
    );
  
    await fetchMoviesRow(
      "https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=35",
      "Comedy"
    );
  
    await fetchMoviesRow(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US",
      "Top Rated"
    );
  
    // tất cả api đã xong
  
    initCarousel();
  };
  
  fetch();
  
// xử lý movie convert sang item bằng định dạng html 
// const convertToItem = (movie) => {
    // ES6: 
    // Template String (`);
    // movie.backdrop_path: ảnh khổ ngang
    // movie.poster_path : ảnh khổ đứng
    // ${}: gắn biến
    //https://image.tmdb.org/t/p/original/ : link hình ảnh 
    // ${movie.backdrop_path}: mã từ bộ phim 
    // ----------------------------------------------------------------
    // return `
    // <div class="item">
    //     <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="">
    // </div>`;

// };

