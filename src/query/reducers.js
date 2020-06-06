import {
  SET_FROM,
  SET_TO,
  SET_DEPART_DATE,
  SET_HIGH_SPEED,
  SET_TRAIN_LIST,
  SET_ORDER_TYPE,
  SET_ONLY_TICKETS,
  SET_TICKET_TYPES,
  SET_CHECKED_TICKET_TYPES,
  SET_TRAIN_TYPES,
  SET_CHECKED_TRAIN_TYPES,
  SET_DEPART_STATIONS,
  SET_CHECKED_DEPART_STATIONS,
  SET_ARRIVE_STATIONS,
  SET_CHECKED_ARRIVE_STATIONS,
  SET_DEPART_TIME_START,
  SET_DEPART_TIME_END,
  SET_ARRIVE_TIME_START,
  SET_ARRIVE_TIME_END,
  SET_IS_FILTERS_VISIBLE,
  SET_SEARCH_PARSED
} from './actions';
import { ORDER_DEPART } from './constant';

export default {
  from(state = null, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_FROM:
        return payload;
      default:
        return state;
    }
  },
  to(state = null, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_TO:
        return payload;
      default:
        return state;
    }
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch(type) {
      case SET_DEPART_DATE:
        return payload;
      default:
        return state;
    }
  },
  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_HIGH_SPEED:
        return payload;
      default:
        return state;
    }
  },
  trainList(state = [], action) {
    const { type, payload } = action;
    switch(type) {
      case SET_TRAIN_LIST:
        return payload;
      default:
        return state;
    }
  },
  orderType(state = ORDER_DEPART, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_ORDER_TYPE:
        return payload;
      default:
        return state;
    }
  },
  onlyTickets(state = false, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_ONLY_TICKETS:
        return payload;
      default:
        return state;
    }
  },
  ticketTypes(state = [], action) {
    const { type, payload } = action;
    switch(type) {
      case SET_TICKET_TYPES:
        return payload;
      default:
        return state;
    }
  },
  checkedTicketTypes(state = {}, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_CHECKED_TICKET_TYPES:
        return payload;
      default:
        return state;
    }
  },
  trainTypes(state = [], action) {
    const { type, payload } = action;
    switch(type) {
      case SET_TRAIN_TYPES:
        return payload;
      default:
        return state;
    }
  },
  checkedTrainTypes(state = {}, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_CHECKED_TRAIN_TYPES:
        return payload;
      default:
        return state;
    }
  },
  departStations(state = [], action) {
    const { type, payload } = action;
    switch(type) {
      case SET_DEPART_STATIONS:
        return payload;
      default:
        return state;
    }
  },
  checkedDepartStations(state = {}, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_CHECKED_DEPART_STATIONS:
        return payload;
      default:
        return state;
    }
  },
  arriveStations(state = [], action) {
    const { type, payload } = action;
    switch(type) {
      case SET_ARRIVE_STATIONS:
        return payload;
      default:
        return state;
    }
  },
  checkedArriveStations(state = {}, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_CHECKED_ARRIVE_STATIONS:
        return payload;
      default:
        return state;
    }
  },
  departTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_DEPART_TIME_START:
        return payload;
      default:
        return state;
    }
  },
  departTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_DEPART_TIME_END:
        return payload;
      default:
        return state;
    }
  },
  arriveTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_ARRIVE_TIME_START:
        return payload;
      default:
        return state;
    }
  },
  arriveTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_ARRIVE_TIME_END:
        return payload;
      default:
        return state;
    }
  },
  isFiltersVisible(state = false, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_IS_FILTERS_VISIBLE:
        return payload;
      default:
        return state;
    }
  },
  searchParsed(state = false, action) {
    const { type, payload } = action;
    switch(type) {
      case SET_SEARCH_PARSED:
        return payload;
      default:
        return state;
    }
  },
};