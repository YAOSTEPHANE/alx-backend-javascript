/**
 * Une carte faible des points de terminaison et du nombre d’appels effectués.
 */
export const weakMap = new WeakMap();

/**
 * Nombre maximal d’appels pour un point de terminaison.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Suit le nombre d’appels effectués vers le point de terminaison d’une API.
 * @param {{
 * protocole: Chaîne,
 * nom: Chaîne,
 * }} endpoint - Le point de terminaison auquel envoyer une demande.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
fonction d’exportation  queryAPI(point de terminaison) {
  Si (! weakMap. has(endpoint)) {
    weakMap. set(endpoint, 0);
  }
  weakMap. set(endpoint, weakMap. get(endpoint) + 1);
  if (weakMap. get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('La charge du point de terminaison est élevée');
  }
}
