import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import User from  './User'

@Entity("appointments")
class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id'})
    provider: User;
    /* com isso posso acessar todas as informações de um usuário a partir do agendamento */

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // constructor({provider , date}: Omit<Appointment, 'id'>) {/* assim não preciso definir a interface e posso omitir a id */
    //     this.id = uuid();
    //     this.provider = provider;
    //     this.date = date;
    // }
    /* Quando criamos uma entidade no typeorm, o constructor é criado, de certa forma, pelo Entity */
}

export default Appointment; 