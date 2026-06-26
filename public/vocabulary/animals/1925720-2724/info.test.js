const infoData = require('./info.json');

describe('Pruebas Unitarias - Validación de Vocabulario de Kevin Manzano', () => {
  
  // 1. Validación de la información del estudiante
  test('Debe contener los datos de perfil correctos de Kevin', () => {
    expect(infoData).toHaveProperty('user');
    expect(infoData.user.username).toBe('Kevin Manzano');
    expect(infoData.user.socialLink).toBe('@KevinJMG');
    expect(infoData.user.profileImage).toContain('githubusercontent.com');
  });

  // 2. Validación de la cantidad de palabras
  test('Debe contener EXACTAMENTE 4 pares de palabras sobre animales', () => {
    expect(infoData).toHaveProperty('words');
    expect(Array.isArray(infoData.words)).toBe(true);
    expect(infoData.words.length).toBe(4);
  });

  // 3. Validación de consistencia de datos (IDs y traducciones)
  test('Cada animal debe tener su ID correcto y traducción válida', () => {
    const expectedAnimalsEn = ['Axolotl', 'Shrew', 'Badger', 'Porcupine'];
    const expectedAnimalsEs = ['Ajolote', 'Musaraña', 'Tejón', 'Puercoespín'];

    infoData.words.forEach((word, index) => {
      // Validar que los IDs vayan del 1 al 4 consecutivamente
      expect(word.id).toBe(index + 1);
      
      // Validar que las palabras coincidan exactamente con el archivo info.json
      expect(word.en).toBe(expectedAnimalsEn[index]);
      expect(word.es).toBe(expectedAnimalsEs[index]);
      
      // Asegurar que no haya espacios en blanco innecesarios que alteren las pruebas
      expect(word.en.trim()).toBe(word.en);
      expect(word.es.trim()).toBe(word.es);
    });
  });
});