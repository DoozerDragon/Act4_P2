const app = {
    data() {
        return {
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: 'Comida',
            contactos: [],
            intervaloMensajes: null,
            intervaloLlamadas: null,
        }
    },
    computed: {
        totalMensajes() {
            let total = 0;
            for (let i = 0; i < this.contactos.length; i++) {
                total += this.contactos[i].mensajes;
            }
            return total;
        },
        totalLlamadas() {
            let total = 0;
            for (let i = 0; i < this.contactos.length; i++) {
                total += this.contactos[i].llamadas;
            }
            return total;
        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    mensajes: 0,
                    llamadas: 0,
                });
                this.nuevoNombre = '';
                this.nuevoTelefono = '';
            }
        },
        incrementarMensajes(index) {
            if (this.contactos[index].mensajes < 25) {
                this.contactos[index].mensajes++;
            }
        },
        decrementarMensajes(index) {
            if (this.contactos[index].mensajes > 0) {
                this.contactos[index].mensajes--;
            }
        },
        incrementarLlamadas(index) {
            if (this.contactos[index].llamadas < 15) {
                this.contactos[index].llamadas++;
            }
        },
        decrementarLlamadas(index) {
            if (this.contactos[index].llamadas > 0) {
                this.contactos[index].llamadas--;
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        iniciarIncrementoMensajes(index) {
            this.incrementarMensajes(index);
            this.intervaloMensajes = setInterval(() => this.incrementarMensajes(index), 200);
        },
        detenerIncrementoMensajes() {
            clearInterval(this.intervaloMensajes);
        },
        iniciarIncrementoLlamadas(index) {
            this.incrementarLlamadas(index);
            this.intervaloLlamadas = setInterval(() => this.incrementarLlamadas(index), 200);
        },
        detenerIncrementoLlamadas() {
            clearInterval(this.intervaloLlamadas);
        }
    }
}

Vue.createApp(app).mount('#seccion');
