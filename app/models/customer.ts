/**
 * Created by AmirT on 2016-11-06.
 */
import {Table, Column, PrimaryGeneratedColumn, Index} from "typeorm";

@Table()
@Index("index_name_english", ['nameEnglish'], { unique: true })
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nameHebrew: string;
    @Column()
    nameEnglish: string;
    
}