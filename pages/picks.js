export default function Checklist() {
  // Define checklist items
  const checklistItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ];

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        {checklistItems.map((item, index) => (
          <li key={index}>
            <input type="checkbox" id={`item-${index}`} />
            <label htmlFor={`item-${index}`}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

