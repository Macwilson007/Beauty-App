import fetch from 'node-fetch';

const urls = [
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=1000'
];

async function check() {
  const results = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      results.push(`${res.status === 200 ? 'OK' : 'FAIL ' + res.status}: ${url}`);
    } catch (e) {
      results.push(`ERR: ${url} - ${e.message}`);
    }
  }
  console.log(results.join('\n'));
}

check();
