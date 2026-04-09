import fetch from 'node-fetch';

const urls = [
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1626245914562-98ed11463a94?auto=format&fit=crop&q=80&w=800'
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`${res.status === 200 ? 'OK' : 'FAIL ' + res.status}: ${url}`);
    } catch (e) {
      console.log(`ERR: ${url} - ${e.message}`);
    }
  }
}

check();
