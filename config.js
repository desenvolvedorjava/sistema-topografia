const SUPABASE_URL = 'https://woepepakexdthudjuykl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cr9u-5_aJRTEmWvgg32EiQ_gxUlIAtW';

// Inicializa a conexão com a base de dados
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função global de logout
async function fazerLogout() {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
}