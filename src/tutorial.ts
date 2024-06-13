const url = "https://www.course-api.com/react-tours-project";

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string
}

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data:Tour[] = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

fetchData(url);