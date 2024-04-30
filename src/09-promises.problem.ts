interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// solution 1: utility type
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

// solution 2: type casting
// not safe (prefer 1 or 3)
export const fetchLukeSkywalker2 = async () => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data as LukeSkywalker;
};

// solution 3: type data
// the proper return type is inferred because it´s an async function
export const fetchLukeSkywalker3 = async (): Promise<LukeSkywalker> => {
  // this syntax makes sure it´s assignable to Luke Skywalker
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data;
};
