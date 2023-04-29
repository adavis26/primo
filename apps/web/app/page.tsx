import './styles.css';

async function getStats() {
  const res = await fetch(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/MrIndiana155',
    {
      headers: {
        'TRN-Api-Key': '8c99c595-b745-468c-a17a-863e54e4de8f',
      },
    }
  );

  console.log(res.status);
  if (res.status >= 400) {
    throw Error(`Request failed with status ${res.status}`);
  }
  // return res.json();
}

export default async function Page() {
  const data = await getStats();

  return <div className="shadow">yo</div>;
}
