export const mindMapData = [
    { id: 1, Label: "Creativity", branch: "Root" },
    { id: 2, Label: "Brainstorming", parentId: 1, branch: "Right" },
    { id: 3, Label: "Complementing", parentId: 1, branch: "Left" },
    { id: 4, Label: "Sessions", parentId: 2, branch: "subRight" },
    { id: 5, Label: "Generate", parentId: 2, branch: "subRight" },
    { id: 6, Label: "Local", parentId: 4, branch: "subRight" },
    { id: 7, Label: "Remote", parentId: 4, branch: "subRight" },
    { id: 8, Label: "Individual", parentId: 4, branch: "subRight" },
    { id: 9, Label: "Teams", parentId: 4, branch: "subRight" },
    { id: 10, Label: "Ideas", parentId: 5, branch: "subRight" },
    { id: 11, Label: "Engagement", parentId: 5, branch: "subRight" },
    { id: 12, Label: "Product", parentId: 10, branch: "subRight" },
    { id: 13, Label: "Service", parentId: 10, branch: "subRight" },
    { id: 14, Label: "Business Direction", parentId: 10, branch: "subRight" },
    { id: 15, Label: "Empowering", parentId: 11, branch: "subRight" },
    { id: 16, Label: "Ownership", parentId: 11, branch: "subRight" },
    { id: 17, Label: "Information", parentId: 3, branch: "subLeft" },
    { id: 18, Label: "Expectations", parentId: 3, branch: "subLeft" },
    { id: 19, Label: "Competetors", parentId: 17, branch: "subLeft" },
    { id: 20, Label: "Products", parentId: 17, branch: "subLeft" },
    { id: 21, Label: "Features", parentId: 17, branch: "subLeft" },
    { id: 22, Label: "Other Data", parentId: 17, branch: "subLeft" },
    { id: 23, Label: "Organization", parentId: 18, branch: "subLeft" },
    { id: 24, Label: "Customer", parentId: 18, branch: "subLeft" },
    { id: 25, Label: "Staff", parentId: 18, branch: "subLeft" },
    { id: 26, Label: "Stakeholders", parentId: 18, branch: "subLeft" }
];