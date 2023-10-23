const getMovieID = () => {
  const urlParams = new URL(window.location.href);
  return urlParams.searchParams.get('id');
};

export default getMovieID;