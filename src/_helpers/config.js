export const addBlogForm = {
  formTitle: "Add Blog",
  formContent: [
    {
      name: "category",
      label: "Category",
      type: "select",

      selectOptions: [
        { value: "dataStructure", label: "Data Structure" },
        { value: "interview", label: "Interview question" }
      ]
    },
    {
      name: "subCat",
      label: "Sub Category",
      type: "select",

      selectOptions: [
        { value: "js", label: "Javascript" },
        { value: "stack", label: "Stack" },
        { value: "queue", label: "Queue" },
        { value: "linkedList", label: "Linked list" },
        { value: "array", label: "Arrays" }
      ]
    },
    {
      name: "tags",
      label: "Tags",
      type: "tag",
      tagoptions: ["IT", "Cloud", "Javascript"]
    },
    {
      name: "title",
      label: "Title of blog",
      type: "text",
      componentclass: "textarea"
    },
    {
      name: "seri",
      label: "Seri of blog",
      type: "text",
      componentclass: "textarea"
    },
    {
      name: "content",
      label: "Content of blog",
      type: "textarea",
      componentclass: "textarea"
    }
  ]
};

export const addProjectForm = {
  formTitle: "Create a Project",
  formContent: [
    {
      name: "name",
      label: "Project Name",
      type: "text"
    },
    {
      name: "tags",
      label: "Tags",
      type: "tag"
    },
    {
      name: "description",
      label: "Description",
      type: "textarea"
    },
    {
      name: "category",
      label: "Category",
      type: "select",

      selectOptions: [
        { value: "dataStructure", label: "Data Structure" },
        { value: "interview", label: "Interview question" }
      ]
    }
  ]
};

export const addFlashCardForm = {
  formTitle: "Create a flash card",
  formContent: [
    {
      name: "front",
      label: "Front of card",
      type: "text"
    },
    {
      name: "back",
      label: "Back of card",
      type: "textarea"
    },
    {
      name: "tags",
      label: "Tags",
      type: "tag"
    },
    {
      name: "category",
      label: "Category",
      type: "doubleSelect",
      selectOptions: [
        {
          value: "dataStructure",
          label: "Data Structure"
        },
        {
          value: "algo",
          label: "Algorithm"
        },
        {
          value: "java",
          label: "Java"
        }
      ],
      java: {
        name: "subCategory",
        label: "Sub Category",
        type: "select",
        selectOptions: [
          { value: "javaIO", label: "Java IO" },
          { value: "java8", label: "Java 8 Stream" },
          { value: "javaDateTime", label: "Java Date Time" },
          { value: "javaGenerics", label: "Java Generics" },
          { value: "javaCollection", label: "Java Collection" },
          { value: "designPattern", label: "Design Pattern" },
          { value: "solid", label: "Solid" }
        ]
      },
      dataStructure: {
        name: "subCategory",
        label: "Sub Category",
        type: "select",
        selectOptions: [
          { value: "tree", label: "Tree" },
          { value: "stackQueue", label: "Stack and Queue" },
          { value: "array", label: "Array" },
          { value: "linkedlist", label: "Linkedlist" },
          { value: "string", label: "String" },
          { value: "graph", label: "Graph" }
        ]
      },
      algo: {
        name: "subCategory",
        label: "Sub Category",
        type: "select",
        selectOptions: [
          { value: "dynamicProgramming", label: "Dynamic Programming" },
          { value: "backtracking", label: "Back Tracking" }
        ]
      }
    }
  ]
};
