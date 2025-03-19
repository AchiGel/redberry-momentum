const TOKEN = import.meta.env.VITE_API_TOKEN;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ***************** სერვერიდან მოგვაქვს ყველა სტატუსი *********************//

export const getAllStatuses = async () => {
  const response = await fetch(`${BASE_URL}/statuses`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
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

// ***************** სერვერიდან მოგვაქვს ყველა პროპრიტეტი *********************//

export const getAllPriorities = async () => {
  const response = await fetch(`${BASE_URL}/priorities`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// ***************** სერვერიდან მოგვაქვს ყველა დეპარტამენტი *********************//

export const getAllDepartments = async () => {
  const response = await fetch(`${BASE_URL}/departments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// ***************** სერვერიდან მოგვაქვს ყველა დასაქმებული *********************//

export const getAllEmployees = async () => {
  const response = await fetch(`${BASE_URL}/employees`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// ***************** სერვერიდან მოგვაქვს თითოეული დავალება *********************//

export const getSingleTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// ***************** სერვერიდან მოგვაქვს თითოეული დავალების კომენტარები *********************//

export const getSingleTaskComments = async (id: number) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}/comments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// ***************** სერვერზე ვპოსტავთ კომენტარს *********************//

export const postSingleTaskComment = async (
  id: number,
  comment: { text: string; parent_id?: number | null }
) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Failed to post comment:", error);
    throw error;
  }
};

// ***************** სერვერზე ვპოსტავთ თანამშრომელს *********************//

export const postEmployee = async (employee: FormData) => {
  try {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: employee,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Failed to post employee:", error);
    throw error;
  }
};

// ***************** სერვერზე ვპოსტავთ დავალებას *********************//

export const postNewTask = async (task: FormData) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: task,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Failed to post task:", error);
    throw error;
  }
};
