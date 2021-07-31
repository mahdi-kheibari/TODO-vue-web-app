<template>
    <div>
        <div class="card my-4">
            <div class="card-header bg-title text-white">
                <div class="row no-gutters w-100 align-items-center">
                    <h3 class="card-title col-9"> {{title}}</h3>
                    <div class="col-2 offset-1">
                        <b-icon icon="pencil-square" 
                        @click="editTodo({title,caption,id})"
                        font-scale="2" class="text-primary items-icon"></b-icon>
                        <b-icon icon="trash" 
                        @click="deleteTodo(id)"
                        font-scale="2" class="text-danger items-icon"></b-icon>
                        
                    
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p>
                    {{caption}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
    props:{
        title:String,
        caption:String,
        id:String
    },
    methods:{
        ...mapMutations(["deleteTodo"]),
        ...mapMutations(["editTodo"]),
        // ...mapActions(["editTodo"])
    }
}
</script>
<style scoped>
.bg-title {
  background: rgb(0, 152, 33);
  background: linear-gradient(90deg, rgba(0, 152, 33, 1) 0%, rgba(17, 173, 0, 1) 23%, rgba(39, 255, 0, 1) 100%);
}
.items-icon{
  cursor: pointer;
}
</style>