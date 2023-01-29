
export function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) => {
      return restaurant?.data?.name
        ?.toLowerCase()
        ?.includes(searchText.toLowerCase());
    });
    return filterData;
  }