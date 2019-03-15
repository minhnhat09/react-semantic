export const addBlogForm = {
  formTitle: "Add Blog",
  formContent: [
    {
      name: "category",
      label: "Category",
      type: "select",
      componentclass: "select",
      selectoptions: [
        { value: "dataStructure", label: "Data Structure" },
        { value: "interview", label: "Interview question" }
      ]
    },
    {
      name: "subCat",
      label: "Sub Category",
      type: "select",
      componentclass: "select",
      selectoptions: [
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
  formTitle: "Add Blog",
  formContent: [
    {
      name: "category",
      label: "Category",
      type: "select",
      componentclass: "select",
      selectoptions: [
        { value: "dataStructure", label: "Data Structure" },
        { value: "interview", label: "Interview question" }
      ]
    },
    
    {
      name: "tags",
      label: "Tags",
      type: "tag"
    },
    {
      name: "name",
      label: "Project Name",
      type: "text"
    },
    {
      name: "description",
      label: "Description",
      type: "textarea"
    }
  ]
}