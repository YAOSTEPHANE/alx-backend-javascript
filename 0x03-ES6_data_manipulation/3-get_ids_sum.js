/**
 * Récupère la somme des identifiants d’une liste d’étudiants.
 * @param {{
 * id: Numéro,
 * prénom : chaîne,
 * emplacement: String
 * }[]} students - La liste des étudiants.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Nombre}
 */
export par défaut  de la fonction getStudentIdsSum(students) {
  if (student instanceof Array) {
    les étudiants de retour. réduire(
      (prevStudent, curStudent) => prevStudent. Identifiant ||  prevStudent + curStudent. ID,
      0,
    );
  }
  retour 0;
}
