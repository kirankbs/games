export const roll = () => {
        const min = Math.ceil(1);
        const max = Math.floor(13);
        return Math.floor(Math.random() * (max - min)) + min;
     }