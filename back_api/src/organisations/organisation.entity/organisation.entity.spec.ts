import { Organisation } from './organisation.entity';

describe('OrganisationEntity', () => {
  it('should be defined', () => {
    expect(new Organisation()).toBeDefined();
  });
});
