import { VMenu } from "vuetify/lib"

export const cmsDirective = {
    data: () => {
        return {
            foundDirectives: []
        }
    },
    methods: {
        parseDirectives(inHTML) {
            //parse out the HTML and return an array of the directives from the template
            this.foundDirectives = inHTML.replace(/<[^>]*>?/gm, '').split('!')
        },
        includeDirectives(foundDirectives) {
            
            let vm = this
            let included = []

            const cmsParagraph = {
                props: ['text'],
                template: '<v-textarea>{{ text }}</v-textarea>'
            }
            const cmsArticle = {
                props: ['text'],
                template: '<v-textarea>{{text}}</v-textarea>'
            }

            for(let i = 0; i < foundDirectives.length; i++) {
                if(foundDirectives[i] === 'cmsParagraph') {
                    included.push( cmsParagraph )
                }
                if(foundDirectives[i] === 'cmsArticle') {
                    included.push( cmsArticle )
                }
            }

            return included
        }
    }
}

