export const motto="Sometimes you win sometimes you learn".split(' ')
export const panelBackgrounds = [
    'https://source.unsplash.com/grayscale-photo-of-wall-st-signage-uJhgEXPqSPk',
    'https://source.unsplash.com/a-close-up-of-the-headlight-of-a-motorcycle-_TWoPZowPKc',
    'https://source.unsplash.com/person-sitting-in-a-motorcycle-during-daytime-selective-photography-xrHZ_FDM1XY',
    'https://source.unsplash.com/blue-and-black-round-ornament-z7ilrSQDHyI',
    'https://source.unsplash.com/a-row-of-parked-cars-on-a-city-street-Li155fhUDP4',
    'https://source.unsplash.com/a-close-up-of-a-motorcycle-VYmXEYuQKvs'

];
export const getData = async (url,fcName)=>{
    const response = await fetch(url)
    const data = await response.json()
    fcName(data)
}