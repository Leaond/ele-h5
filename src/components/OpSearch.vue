<template>
    <div class="op-search" :class="{ 'op-search--show-axtion': showAction }" :style="{ background: background }">
        <div class="op-search__content" :class="shape ? `op-search__content--${shape}` : ''">
            <div class="op-cell op-search__filed">
                <div class="op-filed__left-icon"></div>
                <div class="op-cell__value">
                    <div class="op-filed__body">
                        <input type="search" class="op-filed__control" :value="modelValue" :placeholder="placeholder"
                            @keypress="onKeyPress"
                            @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)" />
                        <div v-if="$slots['right-icon']" class="op-filed__right-icon">
                            <slot></slot>
                        </div>
                        <VanIcon name="clear"></VanIcon>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showAction" class="op-search__action">
            <slot name="action">
                <div @click="emits('cancel')">取消</div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
interface IProps {
    showAction?: boolean,
    background?: string,
    placeholder?: string,
    shape?: string,
    modelValue?: string | number
}
const props = defineProps<IProps>()

interface IEmits {
    (e: 'search', v?: string | number): void,
    (e: 'cancel'): void,
    (e: 'clear'): void,
    (e: 'update:modelValue', v?: string | number): void
}
const emits = defineEmits<IEmits>()

const onKeyPress = (e: KeyboardEvent) => {
    const ENTER_CODE = 13
    if (e.keyCode === ENTER_CODE) {
        e.preventDefault()
        emits('search', props.modelValue)
    }
}
const onClear = () => {
    emits('update:modelValue', '')
    emits('clear')
}
</script>

<style scoped lang='scss'></style>