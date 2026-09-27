const SUPABASE_URL = 'https://woepepakexdthudjuykl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cr9u-5_aJRTEmWvgg32EiQ_gxUlIAtW';

// Removemos o "const" e usamos window.supabase para evitar o erro de conflito
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função global de logout
async function fazerLogout() {
  await window.supabase.auth.signOut();
  window.location.href = 'index.html';
}