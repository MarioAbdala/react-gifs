export const randomElement = () => {
    const elements = ['Star Wars', 'Guns N Roses', 'Pink Floyd', 'Stranger Things', 'Darth Vader', 'Deep Rock Galactic', 'The Elder Scrolls', 'Dead by Daylight', 'React', 'JavaScript', 'Peaky Blinders', 'Better Call Saul', 'Breaking Bad', 'Harry Potter', 'Marvel', 'Thor', 'Dr Strange', 'Iron Man', 'Captain America', 'Spiderman', 'Batman']
    const min = 0;
    const max = Math.floor(elements.length);
    const random = Math.floor(Math.random() * (max - min) + min);
    return elements[random];
}