import dayService from '../services/days'

const initialState = {
  days: [],
  mondays: [],
  tuesdays: [],
  wednesdays: [],
  thursdays: [],
  fridays: [],
  saturdays: [],
  sundays: []
}

const dayReducer = (state = initialState, action) => {
  console.log(action.type)

  switch (action.type) {
  case 'INIT_DAYS':
    return { ...state, days: action.data }

  case 'SORT_TO_WEEKDAYS':
    return {
      ...state,
      mondays: action.data.mondays,
      tuesdays: action.data.tuesdays,
      wednesdays: action.data.wednesdays,
      thursdays: action.data.thursdays,
      fridays: action.data.fridays,
      saturdays: action.data.saturdays,
      sundays: action.data.sundays
    }

  default:
    return state
  }
}

const sortToWeekdays = (days) => {
  return {
    type: 'SORT_TO_WEEKDAYS',
    data: {
      mondays: days.filter(day => day.weekday === 0).map(day => day.date),
      tuesdays: days.filter(day => day.weekday === 1).map(day => day.date),
      wednesdays: days.filter(day => day.weekday === 2).map(day => day.date),
      thursdays: days.filter(day => day.weekday === 3).map(day => day.date),
      fridays: days.filter(day => day.weekday === 4).map(day => day.date),
      saturdays: days.filter(day => day.weekday === 5).map(day => day.date),
      sundays: days.filter(day => day.weekday === 6).map(day => day.date)
    }
  }
}

export const initializeDays = () => {
  return async (dispatch) => {
    const days = await dayService.getAll()

    dispatch({
      type: 'INIT_DAYS',
      data: days
    })

    dispatch(sortToWeekdays(days))
  }
}

export default dayReducer