import cds from '@sap/cds';
import { TextBundle } from '@sap/textbundle';

export default class HelperClass {
  /**
 * Insert records in bulk
 * @param {string} entity - table name
 * @param {array} entries - record of columns and values
 * @returns result of the query / error encountered
 */
  async fnCreate(entity: string, entries: object[]) {
    try {
      const tx = cds.tx();
      const query = INSERT.into(entity).entries(entries);
      const result = await tx.run(query).then(tx.commit, tx.rollback)
      return { result: result };
    } catch (error) {
      console.error("Error encountered in inserting data:", error);
      throw error;
    }
  }

  /**
   * Read records with or without conditions
   * @param {object} entity - table name
   * @param {array} columns - columns to be retrieved
   * @param {object} where - condition in which record to be retrieved
   * @param {array} having - condition in which record to be retrieved
   * @param {array} groupBy - groups the records
   * @param {array} orderBy - order the records in asc or desc order
   * @returns result of the query / error encountered
   */
  async fnRead(
    entity: string,
    where: object = {},
    columns: string[] = [],
    having: string[] = [],
    groupBy: string[] = [],
    orderBy: string[] = []
  ) {
    try {
      const query = SELECT
        .from(entity)
        .columns(...columns)
        .where(where)
        .having(having)
        .groupBy(...groupBy)
        .orderBy(...orderBy)
      const result = await cds.run(query);
      return { result: result };
    } catch (error) {
      console.error("Error encountered in reading data:", error);
      throw error;
    }
  }

  /**
   * Update a single entry record that matches the key field/s
   * @param {object} entity - table name
   * @param {object} where - condition in which record to be updated
   * @param {array} entries - record of columns and values
   * @returns result of the query / error encountered
   */
  async fnUpdate(entity: string, where: object, entries: object) {
    try {
      const tx = cds.tx();
      const query = UPDATE(entity).set(entries).where(where);
      const result = await tx.run(query).then(tx.commit, tx.rollback)
      return { result: result };
    } catch (error) {
      console.error("Error encountered in updating data:", error);
      throw error;
    }
  }

  /**
   * Insert records in bulk if values of the key field/s does not exists.
   * Otherwise, update records in bulk.
   * @param {string} entity - table name
   * @param {array} entries - record of columns and values
   * @returns result of the query / error encountered
   */
  async fnUpsert(entity: string, entries: object[]) {
    try {
      const tx = cds.tx();
      const query = UPSERT.into(entity).entries(entries);
      const result = await tx.run(query).then(tx.commit, tx.rollback)
      return { result: result };
    } catch (error) {
      console.error(
        "Error encountered in updating or inserting data:",
        error
      );
      throw error;
    }
  }

  /**
   * Delete records based on the condition
   * @param {string} entity - table name
   * @param {object} where - condition in which record to be deleted
   * @returns result of the query / error encountered
   */
  async fnDelete(entity: string, where: object) {
    try {
      const tx = cds.tx();
      const query = DELETE.from(entity).where(where);
      const result = await tx.run(query).then(tx.commit, tx.rollback)
      return { result: result };
    } catch (error) {
      console.error("Error encountered in deleting data:", error);
      throw error;
    }
  }

  /**
     * Retrieves the localized strings from i18n
     * @param {string} locale - local of the user logged in
     * @returns {object} bundle - details from the locale
     */
  fnGetTextBundle(locale: string) {
    const bundle = new TextBundle("../i18n/i18n", locale);
    return bundle;
  }
}