<template>
	<div class="modal modal-sm" :class="{ active: active }">
		<a href="#" class="modal-overlay" aria-label="Close" @click.prevent="$emit('closed')"></a>
		<div class="modal-container">
			<div class="modal-header">
				<a href="#" class="btn btn-clear float-right" aria-label="Close" @click.prevent="$emit('closed')"></a>
				<div class="modal-title h5">{{ $t('modal.deleteSong') }}</div>
			</div>
			<div class="modal-body">
				<div class="content">
					<p>{{ $t('text.reallyDeleteSong', { title: title }) }}</p>
					<p>{{ $t('text.cannotBeUndone') }}</p>
				</div>
			</div>
			<div class="modal-footer">
				<a class="btn btn-link btn-gray" href="#" aria-label="Cancel" @click.prevent="$emit('closed')">
					{{ $t('button.cancel') }}
				</a>
				<button class="btn btn-error ml-2" @click="deleteSong">{{ $t('button.delete') }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'song-delete',
	props: {
		active: Boolean,
		title: String,
		id: String,
		songs: Object
	},
	methods: {
		deleteSong () {
			this.$db.collection('songs').doc(this.id).delete().then(() => {
				this.$emit('closed');
				// check existing song translations for this song id and delete corresponding references
				for (const songId in this.songs) {
					const song = this.songs[songId];
					let existingSongKey = null;
					song.translations.forEach((translation, key) => {
						if (translation == this.id) existingSongKey = key;
					});
					if (existingSongKey !== null) {
						let updatedTranslationsList = song.translations.filter(t => t != this.id);
						this.$db.collection('songs').doc(songId).update({ translations: updatedTranslationsList });
					}
				}
				// go back to songs list if not already there
				if (this.$route.name != 'songs') {
					this.$router.push({ name: 'songs' });
				}
				// toast success message
				this.$notify({
					title: this.$parent.$t('toast.songDeleted'),
					text: this.$parent.$t('toast.songDeletedText'),
					type: 'primary'
				});
			}).catch((error) => this.throwError(error));
		},
	}
}
</script>
