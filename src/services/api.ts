const TOKEN = "9e6a12ca-8594-4bbb-9987-9a92500bd781";
const BASE_URL = "https://momentum.redberryinternship.ge/api";

// ***************** სერვერიდან მოგვაქვს ყველა სტატუსი *********************//

export const getAllStatuses = async () => {
  const response = await fetch(`${BASE_URL}/statuses`);
  const data = await response.json();
  return data;
};

// ***************** სერვერიდან მოგვაქვს ყველა დავალება *********************//

export const getAllTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
