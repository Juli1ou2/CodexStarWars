import { Personnage } from './personnage.entity';

describe('Personnage', () => {
  it('should be defined', () => {
    expect(new Personnage()).toBeDefined();
  });
});
