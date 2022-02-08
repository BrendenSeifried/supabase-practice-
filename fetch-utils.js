const SUPABASE_URL = 'https://tbzaipzkyiuqlhxtbclu.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiemFpcHpreWl1cWxoeHRiY2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjIsImV4cCI6MTk1OTkxNzQ2Mn0.41zG4q5-OKD_FaQliXTAUAedWspG6p7sgoszhCsQ3X4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    //console.log(resp);
    return checkError(resp);
    
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
    const resp = await client.from('movies').select(`*, directors(*)`);
    
    //console.log(resp);
    return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
    const dirN = await client.from('directors').select(`name`);
    //console.log(dirN);
    return checkError(dirN);
}

export async function getMovieById(id) {


    const movieID = await client.from('movies').select('*').eq('id', id).single();
    //console.log(movieID);
    return checkError(movieID);

    
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
  // return the movie with the given title

    const resp = await client.from('movies').select('*').eq('title', title).single();
   // console.log(resp);
    return checkError(resp);

  
}

export async function getOldestMovie() {
    const resp = await client.from('movies').select('*').order('year').limit(1).single();
  //const resp = await client.from('movies').select('*') <* means select all .order('year') oder is ordering by column name .limit(1) limit means how many to return in this case one .single() single means just print one match;
    console.log(resp);
    return checkError(resp);
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
