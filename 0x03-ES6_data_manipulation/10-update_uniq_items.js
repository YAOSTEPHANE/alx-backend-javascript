/**
 * Modifie la quantité d’articles d’épicerie uniques à 100.
 * @param {Map<String, number>} map - Une carte du nom d’un
 * l’épicerie et sa quantité.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export par défaut  fonction updateUniqueItems(map) {
  Si (! (instance de cartede  Map)) {
    throw new Error('Cannot process');
  }
  carte. forEach((valeur, clé) => {
    if (valeur === 1) {
      carte. set(clé, 100);
    }
  });
}
