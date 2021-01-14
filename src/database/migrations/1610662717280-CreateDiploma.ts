import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateDiploma1610662717280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'diploma',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'book',
            type: 'integer',
          },
          {
            name: 'page',
            type: 'integer',
          },
          {
            name: 'authorized_representative',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'date_pickup',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'student_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'csv_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'diploma',
      new TableForeignKey({
        name: 'DiplomaStudent',
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'student',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'diploma',
      new TableForeignKey({
        name: 'DiplomaCSV',
        columnNames: ['csv_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'csv',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('diploma', 'DiplomaCSV');

    await queryRunner.dropForeignKey('diploma', 'DiplomaStudent');

    await queryRunner.dropTable('diploma');
  }
}
