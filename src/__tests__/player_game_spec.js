import React from 'react';
import { shallow } from 'enzyme';

import { render, cleanup } from '@testing-library/react';
import axios from 'axios';
import PlayerGame from '../components/PlayerGame';
import PlayerCard from '../components/PlayerCard';
import { findByTestAttr } from '../../utils';

afterEach(cleanup);

jest.mock('axios');

const setup = (props={}) => {
  const component = shallow(<PlayerGame {...props} />);
  return component;
}

describe("PlayerGame component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAttr(component, "PlayerGame");
    expect(wrapper.length).toBe(1);
  });

  it("should render a section to hold player cards", () => {
    const wrapper = findByTestAttr(component, "card-container");
    expect(wrapper.length).toBe(1);
  });

  // it("exampleMethod method should update state", () => {
  //   const classInstance = wrapper.instance();
  //   classInstance.exampleMethod();
  //   const newState = classInstance.state.pieceOfState;
  //   expect(newState).toBe(true);
  // })

  // it("exampleMethod method should return value", () => {
  //   const classInstance = wrapper.instance();
  //   classInstance.exampleMethod_returnsValue(6);
  //   const newValue = classInstance.state.pieceOfState;
  //   expect(newValue).toBe(7);
  // });

  // describe("Fetch player data", () => {
  //   beforeEach((), => {
  //     moxios.install();
  //   });

  //   afterEach((), => {
  //     moxios.uninstall();
  //   });

  //   test("State is updated successfully", () => {
  //     const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
  //     const expectedData = {
  //       data: {
  //         _meta: {
  //           _primary_document: "players",
  //           players: {count: 59}
  //         },
  //         fixtures: [{
  //           away_team: {score: null, team: {}},
  //           home_team: {score: null, team: {}},
  //           id: "112160",
  //           sport: "NBA",
  //           start_date: "2016-05-04T02:30:00Z",
  //           status: null
  //         }],
  //         players: [{
  //           first_name: "Stephen",
  //           fixture: {_members: Array(1), _ref: "fixtures.id"},
  //           fppg: 47.94303797468354,
  //           id: "15475-9524",
  //           images: {default: {}},
  //           injured: false,
  //           injury_details: "knee",
  //           injury_status: "o",
  //           last_name: "Curry",
  //           news: {latest: "2016-05-02T18:35:15Z"},
  //           played: 79,
  //           player_card_url: "https://www.fanduel.com/e/Player/9524/Stats/15475",
  //           position: "PG",
  //           removed: false,
  //           salary: 10600,
  //           starting_order: null,
  //           team: {_members: Array(1), _ref: "teams.id"},
  //         teams: [{
  //           city: "Golden State",
  //           code: "GS",
  //           full_name: "Golden State Warriors",
  //           id: "687",
  //           name: "Warriors"
  //         }]
  //       }]
  //       }
  //     }


  //     moxios.wait(() => {
  //       const request = moxios.requests.mostRecent();
  //       request.repsondsWith({
  //         status: 200,
  //         response: expectedData
  //       })
  //     });

  //     const classInstance = wrapper.instance();
  //     return classInstance.loadPlayerData().then(
  //       () => {

  //       }
  //     )
  //   })

    
  // })
});

// describe('fetch player data', () => {
// it('fetches json data successfully from a json link', () => {
//     const URL = "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
//     const playerData = {
//       data: {
//         _meta: {
//           _primary_document: "players",
//           players: {count: 59}
//         },
//         fixtures: [{
//           away_team: {score: null, team: {}},
//           home_team: {score: null, team: {}},
//           id: "112160",
//           sport: "NBA",
//           start_date: "2016-05-04T02:30:00Z",
//           status: null
//         }],
//         players: [{
//           first_name: "Stephen",
//           fixture: {_members: Array(1), _ref: "fixtures.id"},
//           fppg: 47.94303797468354,
//           id: "15475-9524",
//           images: {default: {}},
//           injured: false,
//           injury_details: "knee",
//           injury_status: "o",
//           last_name: "Curry",
//           news: {latest: "2016-05-02T18:35:15Z"},
//           played: 79,
//           player_card_url: "https://www.fanduel.com/e/Player/9524/Stats/15475",
//           position: "PG",
//           removed: false,
//           salary: 10600,
//           starting_order: null,
//           team: {_members: Array(1), _ref: "teams.id"},
//         teams: [{
//           city: "Golden State",
//           code: "GS",
//           full_name: "Golden State Warriors",
//           id: "687",
//           name: "Warriors"
//         }]
//       }]
//       }
//     };
    // axios.get.mockResolvedValueOnce({data: playerData});
    // const getSpy = jest.spyOn(axios, 'get');
    // const playersInstance = shallow(<Players />);
    // expect(getSpy).toBeCalled();

    // const { getByTestId } = render(<Players />);
    // const {players} = shallow(<Players />);

    // expect(getByTestId('players').textContent).toBe("Hi");

    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledWith(URL);
//   })
// })