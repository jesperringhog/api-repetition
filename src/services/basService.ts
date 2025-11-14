export const basGet = async <T>(url: string) => {
    const basRes = await fetch(url);
    const basData: T = await basRes.json();
    return basData;
}