

export const CardSelect =
  ({ currentlySelectedStr,
    mainHeaderText,
    secondaryHeaderText,
    cards
  }) => (
      <div className="flex flex-col text-gray-700">
        <div className="flex items-end justify-between pb-2 border-b border-gray-500 ">
          <div className="text-lg font-semibold">{mainHeaderText}</div>
          <div className="text-xs">{secondaryHeaderText}</div>
        </div>
        <div className="flex mt-2">
          {
            cards.map((c, i) => (<CardSelectableCard key={i} itemText={c} isSelected={c === currentlySelectedStr} />))
          }
        </div>
      </div>
    )


const CardSelectableCard = ({ itemText, isSelected }) => (
  <a
    onClick={(evt) => {
      evt.preventDefault();
      console.warn('not implmented yet');
    }}
    href="/"
    className={`p-2 m-1 rounded-lg shadow-lg ${isSelected ? 'bg-purple-200 border-2 border-purple-500' : 'bg-gray-100 hover:border-2 hover:border-blue-500 hover:bg-blue-200'}`}>
    {itemText}
  </a>
)


