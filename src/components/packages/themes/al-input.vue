<template>
    <div :class="computedClass">
        <input class="al-input__inner"
            :value="value"
            :placeholder="placeholder"
            :disabled="disabled"
            :type ="type || 'text'"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)" 
            @input="$emit('input', $event.target.value)">
    </div>
</template>
<script>

/**
 * Author: Alex(https://github.com/zlalex);
 * ConContact: zhouliang1006@126.com
 * (c) 2017 - 2018 by Nanjing 
 */ 
export default {
    name: 'al-input',
    props: ['value', 'alClass', 'size', 'type', 'placeholder', 'disabled'],
    computed:{
        computedClass(){
            return `al-input al-input__${this.size || 'default'} ${this.alClass}` 
        }
    }
}
</script>

