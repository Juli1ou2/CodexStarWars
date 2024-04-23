import { Vehicule } from './vehicule.entity';

describe('Vehicule', () => {
  it('should be defined', () => {
    expect(new Vehicule()).toBeDefined();
  });
});
