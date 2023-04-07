export const Filter = ({ onFilter, filter }) => {
  return (
    <div>
      <p>Find Contacts by name</p>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={onFilter}
          value={filter}
        />
      </label>
    </div>
  );
};
