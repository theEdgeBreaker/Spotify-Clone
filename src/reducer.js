export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finish developing...
  // token:
  // "BQCe6o4DEZh91oetdMUvaK8ldJPgsG4e_GVOXMaU59Vi6PikvJt1Qap_UL_HJwzUhQH44s_iRtjUnNcG-s4O-AkOPgKDb_UakA1CITEkQrMgDUDGs6zdGqmAYdf04g1AyKUUiEZRGPvB8OyZ9xqZjE0iIYdd-_ZtL0wuIHpU-kGsSOjaXuE9UWX3oiY7qeDzuTVl9o_Z0DdIOWtAQx_Nsg",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };

    default:
      return state;
  }
};

export default reducer;
