import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup } from '@testing-library/react';
import PlayerGame from '../components/PlayerGame';
import PlayerCard from '../components/PlayerCard';
import { findByTestAttr } from '../../utils';

afterEach(cleanup);

const setup = (props={}) => {
  const component = shallow(<PlayerCard {...props} />);
  return component;
}

describe("PlayerCard component", () => {

  describe('Has props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        playerData: {
                    first_name: "Stephen",
                    last_name: "Curry",
                    fppg: 47.94303797468354,
                    id: "15475-9524",
                    images: {"default": {"url": "xxxx"}},
                    injured: false,
                    injury_details: "knee",
                    injury_status: "o",
                    last_name: "Curry",
                    news: {latest: "2016-05-02T18:35:15Z"},
                    played: 79,
                    player_card_url: "https://www.fanduel.com/e/Player/9524/Stats/15475",
                    position: "PG",
                    removed: false,
                    salary: 10600,
                    starting_order: null,
                    team: {_members: Array(1), _ref: "teams.id"}
                  }
      }; 
      wrapper = setup(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "PlayerCard");
      expect(component.length).toBe(1);
    });

    it("should render the player's name", () => {
      const img = findByTestAttr(wrapper, "player-name");
      expect(img.length).toBe(1);
    });

    it("should render an <img>", () => {
      const img = findByTestAttr(wrapper, "player-img");
      expect(img.length).toBe(1);
    });
  });
  
});