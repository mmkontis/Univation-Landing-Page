export async function getUniversitiesByCountry(country: string) {
  const response = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
  return await response.json();
}

export function getLogoUrl(domain: string) {
  return `https://logo.clearbit.com/${domain}`;
}