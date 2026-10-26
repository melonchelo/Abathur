**Versión:** 1.0  
**Estado:** Definición funcional inicial  
**Nombre del proyecto:** `-Abathur-`

## Plataforma de gestión y evolución del conocimiento
---

## 1. Propósito y visión

### 1.1. Propósito 

Desarrollar una plataforma de gestión del conocimiento destinada a pymes y comunidades cerradas que necesitan centralizar su información en un único lugar de consulta.

La plataforma debe permitir que una persona encuentre respuestas confiables a preguntas como:

- ¿Cómo se hace algo?
- ¿Qué procedimiento debo seguir?
- ¿Qué hacer en determinada situación?
- ¿Cómo se resolvió anteriormente un problema similar?
- ¿La información que estoy consultando sigue vigente?

El objetivo es transformar el conocimiento disperso, informal o dependiente de personas particulares en información estructurada, consultable, mantenible y validada.

### 1.2. Principio rector

La plataforma funciona como un mecanismo de recomendación, revisión y mantenimiento del conocimiento bajo control final del administrador.

La comunidad puede aportar información, discutirla, señalar errores y recomendar modificaciones. Sin embargo, las decisiones comunitarias no reemplazan la autoridad final del administrador sobre el contenido publicado.

La reputación y las votaciones permiten ordenar las recomendaciones y ponderar los aportes, pero no conceden autoridad absoluta ni eliminan la supervisión administrativa.

### 1.3. Ciclo de vida del conocimiento

La plataforma debe organizar el conocimiento en tres etapas principales:

**A. Carga**

Asistir a los usuarios para documentar aquello que saben. El objetivo es reducir la dificultad de convertir conocimientos prácticos, experiencias y procedimientos informales en artículos estructurados.

Los clientes y moderadores pueden iniciar propuestas de contenido. La creación y publicación de artículos base queda reservada al administrador o al mecanismo que este autorice.

**B. Consulta**

Ofrecer un repositorio de información validada por el administrador, enriquecida mediante los aportes, comentarios y debates de la comunidad.

El contenido publicado debe poder consultarse como una referencia confiable, distinguiéndolo claramente de las propuestas pendientes de revisión y de las controversias abiertas.

**C. Actualización**

Mantener la información alineada con los hechos, los procedimientos y las condiciones reales de la organización.

Los usuarios pueden señalar errores, proponer correcciones o recomendar cambios. Las propuestas se revisan, se votan cuando corresponda y quedan sujetas a la decisión final del administrador.

Cada publicación debe conservar su historial de versiones para permitir la trazabilidad de los cambios.

---

## 2. Alcance del producto

### 2.1. Público objetivo

- Pequeñas y medianas empresas.
- Equipos de trabajo.
- Comunidades cerradas.
- Organizaciones que necesitan centralizar procedimientos, criterios operativos y conocimiento institucional.

### 2.2. Alcance del conocimiento

La plataforma está orientada a conocimiento técnico y operativo, incluyendo procedimientos, instrucciones, criterios de resolución y documentación de experiencias útiles.

### 2.3. Estructura del conocimiento

El sistema combinará:

- Artículos estructurados como fuente principal de información.
- Propuestas de creación o modificación.
- Comentarios y debates asociados a las propuestas.
- Relaciones simples entre artículos.
- Votaciones para respaldar o rechazar propuestas.
- Historial de versiones y resumen de cambios.
- Reputación para ponderar las contribuciones comunitarias.

### 2.4. Separación entre contenido publicado y propuestas

La información publicada debe estar claramente diferenciada de las propuestas y debates en curso.

Un artículo publicado puede seguir disponible durante una revisión, acompañado de un aviso visible que indique que su contenido está siendo revisado.

La existencia de una propuesta no implica que el artículo haya dejado de ser válido ni que el cambio propuesto ya haya sido aprobado.

---

## 3. Roles y permisos

### 3.1. Administrador

Es la autoridad final de la plataforma.

Responsabilidades y facultades:

- Crear y publicar artículos base.
- Administrar usuarios.
- Designar y gestionar moderadores.
- Administrar y resolver propuestas.
- Intervenir en decisiones comunitarias.
- Confirmar, rechazar o modificar el resultado de una revisión.
- Resolver excepcionalmente asuntos que no alcancen el quórum requerido.
- Supervisar la integridad y vigencia del conocimiento publicado.

Toda intervención administrativa que altere el resultado de una decisión comunitaria debe registrar un motivo y quedar claramente diferenciada del consenso de los moderadores.

### 3.2. Moderadores

Son usuarios designados por el administrador para participar en la revisión del conocimiento.

Pueden:

- Iniciar propuestas.
- Evaluar propuestas.
- Emitir votos ponderados.
- Participar en debates y revisiones.
- Señalar errores y recomendar correcciones.
- Participar en decisiones sobre sanciones comunitarias.

La designación inicial de los moderadores y su peso de voto quedan bajo control del administrador.

### 3.3. Clientes

Son los usuarios habituales de la plataforma.

Pueden:

- Consultar los artículos publicados.
- Comentar y debatir propuestas.
- Iniciar propuestas de creación o modificación.
- Señalar errores o información desactualizada.
- Aportar experiencias y conocimientos.

No poseen voto de validación final sobre las propuestas.

### 3.4. Identidad pública

La plataforma utilizará seudónimos como identidad visible de los participantes.

La identidad de la cuenta se mantendrá separada de la identidad pública. La política concreta de autenticación y recuperación de cuentas queda pendiente de definición.

---

## 4. Ciclo de vida de los artículos y propuestas

### 4.1. Creación del artículo base

La creación de artículos base corresponde al administrador.

Los usuarios y moderadores pueden iniciar propuestas para incorporar nuevos conocimientos. Estas propuestas deben permitir que el administrador evalúe el contenido antes de convertirlo en un artículo publicado.

### 4.2. Propuestas de modificación

Una propuesta de modificación debe identificar:

- El artículo afectado.
- La versión del artículo utilizada como referencia.
- El contenido propuesto.
- El motivo del cambio.
- El autor de la propuesta.
- Su estado de resolución.

La interfaz debe permitir comparar los cambios propuestos con la versión de referencia mediante una vista de diferencias (*diff*).

La propuesta no modifica por sí misma el artículo publicado.

### 4.3. Revisión y votación

Las propuestas pueden ser iniciadas por clientes o moderadores.

Cuando corresponda una votación de moderadores, se aplicarán las siguientes reglas:

- Deben participar al menos tres moderadores.
- La aprobación requiere mayoría simple ponderada.
- El peso del voto depende de la reputación del moderador, sujeto a un límite máximo.
- El peso aplicado debe quedar registrado al momento de votar.
- Las votaciones y sus resultados deben ser auditables.

La aprobación comunitaria constituye una recomendación para el administrador, no una publicación automática ni una decisión final vinculante.

### 4.4. Decisión administrativa

El administrador conserva la decisión final sobre la publicación de una propuesta.

Puede aceptar o rechazar la recomendación comunitaria e intervenir cuando lo considere necesario.

Toda intervención que se aparte del resultado de los moderadores debe registrar un motivo y distinguirse expresamente de dicho resultado.

Si no se alcanza el quórum de tres moderadores, el administrador puede resolver excepcionalmente la propuesta. En ese caso, la resolución debe identificarse como decisión administrativa excepcional y no como consenso comunitario.

### 4.5. Controversias

Cuando una cuestión no alcanza una resolución satisfactoria, puede marcarse como controvertida.

Las controversias no resueltas permanecen abiertas indefinidamente, salvo que una decisión posterior las resuelva.

No existe una caducidad automática del debate.

La interfaz debe diferenciar una controversia abierta de una propuesta aprobada, rechazada o pendiente de decisión administrativa.

### 4.6. Vigencia durante la revisión

Un artículo publicado permanece disponible mientras se revisa, salvo que el administrador decida otra cosa.

Cuando corresponda, se mostrará un aviso de revisión para advertir que su contenido está siendo evaluado.

### 4.7. Fuentes

Se recomienda aportar fuentes que respalden las propuestas, aunque no serán obligatorias en todos los casos.

El formato definitivo para registrar referencias, enlaces y archivos adjuntos queda pendiente de definición.

---

## 5. Reputación y confianza

### 5.1. Objetivo

La reputación debe ayudar a ponderar la calidad y la solidez de las contribuciones, sin confundir participación frecuente con conocimiento confiable.

### 5.2. Obtención de reputación

La reputación se calculará automáticamente a partir de eventos relacionados con la calidad de las contribuciones, especialmente:

- Resultados de revisiones.
- Correcciones confirmadas.
- Aportes cuya validez haya sido respaldada.
- Errores comprobados.
- Conductas abusivas.
- Evaluaciones comunitarias, según reglas que deberán definirse.

La reputación no debe aumentar simplemente por publicar mucho, comentar con frecuencia o emitir numerosos votos.

### 5.3. Pérdida de reputación

La reputación puede disminuir ante errores comprobados, abuso o evaluaciones comunitarias desfavorables, conforme a reglas explícitas y auditables.

### 5.4. Peso de voto

El peso inicial de los moderadores será asignado por el administrador.

El peso podrá variar según la reputación, pero estará limitado por un máximo para evitar concentraciones excesivas de influencia.

El peso exacto, la fórmula de cálculo y los límites numéricos quedan pendientes de definición.

### 5.5. Auditoría

Cada modificación de reputación debe quedar registrada como un evento identificable, con su origen y variación.

El sistema debe permitir explicar por qué una persona obtuvo o perdió reputación.

### 5.6. Sanciones

Las sanciones comunitarias serán evaluadas mediante votación de moderadores, con decisión final del administrador.

Los criterios, tipos de sanción, umbrales de votación y mecanismos de revisión quedan pendientes de definición.

---

## 6. Organización y consulta del conocimiento

### 6.1. Categorías

El conocimiento se organizará mediante categorías y subcategorías.

La jerarquía permitirá agrupar artículos por área, temática o función dentro de la organización.

La estructura concreta podrá variar según las necesidades de cada comunidad.

### 6.2. Campos de los artículos

El modelo inicial contempla los siguientes campos:

- Título.
- Resumen.
- Contenido.
- Categoría.
- Etiquetas.
- Fuentes o referencias, cuando existan.
- Estado del artículo.
- Versión publicada vigente.
- Autoría y datos de publicación.

El contenido publicado y el contenido propuesto se guardan como texto Markdown. En esta entrega se admiten encabezados (`#` y `##`), párrafos y listas (`-`). El servidor rechaza etiquetas HTML y conserva el texto tal como llega. Los encabezados dejan el artículo listo para partirlo más adelante en una búsqueda asistida, sin cambiar el modelo.

### 6.3. Relaciones entre artículos

Los artículos podrán vincularse mediante relaciones simples.

El objetivo es facilitar el acceso a información relacionada sin introducir inicialmente un sistema complejo de relaciones tipadas o un grafo avanzado de conocimiento.

---

## 7. Historial y trazabilidad

### 7.1. Versiones publicadas

Cada versión publicada de un artículo debe conservarse.

Una versión publicada es inmutable: las modificaciones posteriores generan una nueva versión en lugar de sobrescribir la anterior.

Cada versión debe identificar, como mínimo:

- El artículo al que pertenece.
- Su número de versión.
- El contenido publicado.
- Quién la publicó.
- La fecha de publicación.
- Un resumen de los cambios.

### 7.2. Visualización del historial

La interfaz debe priorizar la versión vigente y un resumen de los cambios realizados.

No es obligatorio mostrar todo el historial detallado en la vista principal, aunque las versiones anteriores deben mantenerse disponibles para trazabilidad y auditoría.

### 7.3. Registro de decisiones

Las decisiones administrativas relevantes, las resoluciones excepcionales y los cambios críticos deben quedar registrados.

El sistema debe distinguir entre:

- Resultado de una votación de moderadores.
- Decisión final del administrador.
- Resolución administrativa excepcional por falta de quórum.

Los registros críticos deben conservarse aunque la cuenta de un usuario sea desactivada.

---

## 8. Alcance del MVP

La primera versión funcional debe concentrarse en las capacidades necesarias para gestionar el ciclo de vida del conocimiento.

### 8.1. Funcionalidades incluidas

1. Artículos.
2. Propuestas de creación y modificación.
3. Comparación de cambios propuestos.
4. Votaciones ponderadas de moderadores.
5. Decisión final del administrador.
6. Historial de versiones publicadas.
7. Registro de eventos de reputación.
8. Organización por categorías y subcategorías.
9. Comentarios y debates asociados a propuestas.
10. Registro de auditoría para decisiones relevantes.

### 8.2. Funcionalidades fuera del MVP

Quedan fuera de la primera versión, salvo decisión posterior:

- Grafo visual avanzado de conocimiento.
- Sistema avanzado de notificaciones.
- Funciones complejas de búsqueda y filtrado.
- Relaciones tipadas entre artículos.
- Automatizaciones avanzadas del ciclo de revisión.

La búsqueda básica necesaria para consultar los artículos deberá considerarse parte del funcionamiento esencial del repositorio, aunque la búsqueda avanzada no forme parte del MVP.

### 8.3. Acceso a la plataforma

El acceso se realizará mediante invitación o creación manual de cuentas por parte del administrador.

La política detallada de autenticación, recuperación de credenciales y gestión de cuentas desactivadas queda pendiente.

---

## 9. Modelo lógico inicial de datos

El modelo conceptual contempla las siguientes entidades.

### 9.1. User

Representa a una persona con acceso a la plataforma.

Atributos iniciales:

- `id`
- `username`
- `public_alias`
- `email_or_login`
- `status`
- `created_at`

### 9.2. RoleAssignment

Registra los roles asignados a cada usuario.

Atributos iniciales:

- `user_id`
- `role`
- `assigned_by`
- `assigned_at`

El modelo deberá confirmar si una persona puede desempeñar varios roles simultáneamente.

### 9.3. Category

Representa una categoría o subcategoría.

Atributos iniciales:

- `id`
- `name`
- `description`
- `parent_category_id`

La jerarquía no debe permitir ciclos ni que una categoría sea su propia categoría padre.

### 9.4. Article

Representa el artículo como unidad lógica de conocimiento.

Atributos iniciales:

- `id`
- `title`
- `summary`
- `status`
- `current_version_id`
- `created_by`
- `category_id`

### 9.5. ArticleVersion

Representa una versión publicada e inmutable de un artículo.

Atributos iniciales:

- `id`
- `article_id`
- `version_number`
- `content` (texto Markdown de la versión publicada)
- `change_summary`
- `published_by`
- `published_at`

La combinación de artículo y número de versión debe ser única.

### 9.6. ArticleLink

Representa una relación simple entre dos artículos.

Atributos iniciales:

- `source_article_id`
- `target_article_id`
- `created_by`

### 9.7. Proposal

Representa una propuesta de creación o modificación de conocimiento.

Atributos iniciales:

- `id`
- `article_id`, cuando corresponda
- `created_by`
- `base_version_id`, cuando corresponda
- `proposed_content` (el campo de cuerpo es texto Markdown, con las mismas reglas que `content`)
- `reason`
- `status`
- `created_at`

El modelo deberá contemplar las propuestas de artículos nuevos, que todavía no tienen un artículo publicado asociado.

### 9.8. Comment

Representa un comentario dentro del contexto de una propuesta.

Atributos iniciales:

- `id`
- `proposal_id`
- `author_id`
- `body`
- `created_at`

### 9.9. Vote

Representa el voto de un moderador sobre una propuesta.

Atributos iniciales:

- `id`
- `proposal_id`
- `moderator_id`
- `choice`
- `weight_at_vote`
- `created_at`

Debe existir una regla de unicidad para impedir más de un voto activo por moderador y propuesta, sin perjuicio de que posteriormente se defina si los votos pueden modificarse.

### 9.10. ReputationEvent

Registra cada evento que modifica la reputación de un usuario.

Atributos iniciales:

- `id`
- `user_id`
- `event_type`
- `source_id`
- `delta`
- `created_at`

Cada evento debe tener un origen identificable y evitar procesarse dos veces accidentalmente.

### 9.11. AuditLog

Registra acciones administrativas y otras acciones críticas.

Atributos iniciales:

- `id`
- `actor_id`
- `action`
- `target_type`
- `target_id`
- `reason`
- `metadata`
- `created_at`

El registro debe permitir identificar quién actuó, qué acción realizó, sobre qué entidad y por qué motivo, cuando corresponda.

---

## 10. Reglas de integridad fundamentales

1. La propuesta no modifica directamente el contenido publicado.
2. La publicación de una modificación requiere decisión final del administrador.
3. Las versiones publicadas no pueden sobrescribirse.
4. Cada propuesta debe identificar la versión de referencia cuando corresponda.
5. Las votaciones deben registrar el peso utilizado en el momento de emitir el voto.
6. Las propuestas sujetas a votación requieren al menos tres moderadores participantes para alcanzar una recomendación comunitaria válida.
7. El resultado de una votación debe distinguirse de la decisión administrativa final.
8. Las excepciones administrativas por falta de quórum requieren un motivo registrado.
9. Los eventos de reputación deben ser trazables y no duplicarse.
10. Los cambios administrativos críticos deben quedar auditados.
11. La desactivación de una cuenta no debe borrar los registros críticos de auditoría.
12. Las controversias sin resolución permanecen abiertas.
13. Los artículos en revisión pueden continuar disponibles con un aviso visible.
14. Las categorías no deben formar ciclos jerárquicos.
15. Los permisos de cada rol deben aplicarse tanto en la interfaz como en las operaciones del sistema.

---

## 11. Decisiones pendientes

Los siguientes puntos requieren definición antes de cerrar el diseño funcional y técnico.

### 11.1. Propuestas y votaciones

- Estados exactos de una propuesta.
- Si los moderadores pueden cambiar su voto.
- Cómo se contabilizan abstenciones y votos inválidos.
- Fórmula exacta de mayoría ponderada y tratamiento de empates.
- Flujo específico para propuestas de artículos nuevos.
- Si el administrador puede editar una propuesta antes de publicarla y cómo se registra esa modificación.

### 11.2. Reputación y sanciones

- Fórmula numérica de reputación.
- Valores de ganancia y pérdida por evento.
- Peso mínimo y máximo de voto.
- Criterios para determinar que una revisión fue correcta.
- Criterios para confirmar una corrección.
- Tipos de sanciones y sus umbrales de aprobación.
- Mecanismos de revisión o apelación.

### 11.3. Contenido y fuentes

- Formato para fuentes bibliográficas, enlaces y archivos adjuntos.
- Estructura detallada de los artículos.
- Política para editar o eliminar comentarios.
- Posibilidad de responder comentarios.
- Reglas para retirar o archivar artículos que ya no correspondan.

### 11.4. Administración y acceso

- Si un usuario puede tener varios roles simultáneos.
- Política de autenticación y recuperación de cuentas.
- Tratamiento de usuarios desactivados.
- Acciones administrativas que siempre requieren motivo.
- Facultades para revertir una publicación y procedimiento para hacerlo sin alterar el historial.

### 11.5. Identidad temática y despliegue

- Nombre definitivo de la plataforma.
- Primera temática o área de conocimiento que se utilizará como caso piloto.
- Tecnologías, arquitectura, base de datos y estrategia de despliegue.

---

## 12. Criterio de éxito

La plataforma será útil si permite que una organización:

1. Capture conocimientos que antes permanecían informales o dispersos.
2. Consulte procedimientos y respuestas desde un repositorio centralizado.
3. Detecte información incorrecta o desactualizada.
4. Procese recomendaciones comunitarias sin perder el control administrativo.
5. Publique actualizaciones trazables y conserve las versiones anteriores.
6. Distinga claramente entre información vigente, contenido en revisión y controversias abiertas.

El principio de diseño central es que el conocimiento pueda mejorar continuamente sin que la publicación de cambios dependa exclusivamente de la confianza informal entre personas ni de decisiones comunitarias imposibles de auditar.
