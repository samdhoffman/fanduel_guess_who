export default {
  get: jest.fn().mockResolvedValue(
    {data: {
      _meta: {},
      fixtures: [],
      players: [],
      teams: []
    }}
  )
}